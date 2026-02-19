'use client';

import { useState, useCallback, useEffect, useRef } from 'react';

export function useStartMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
    setSearchQuery('');
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
    setSearchQuery('');
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setSearchQuery('');
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      const menuButton = document.getElementById('menu-button');
      if (menuButton && !menuButton.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        close();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close]);

  return {
    isOpen,
    searchQuery,
    setSearchQuery,
    toggle,
    open,
    close,
    menuRef,
  };
}

