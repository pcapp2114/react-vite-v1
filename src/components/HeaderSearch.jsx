import React, { useState, useRef, useEffect } from 'react';
import styles from './HeaderSearch.module.css';
import { useNavigate } from 'react-router-dom';

export default function HeaderSearch({ setLogoVisible }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
    if (setLogoVisible) setLogoVisible(!isOpen);
  }, [isOpen, setLogoVisible]);

  useEffect(() => {
    function handleDocClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    function handleKey(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('mousedown', handleDocClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleDocClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const handleToggle = () => setIsOpen(v => !v);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    // ✅ navigate to the search page relative to the Router basename
    navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    setIsOpen(false);
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close search' : 'Open search'}
        className={styles.iconButton}
        onClick={handleToggle}
      >
        <svg width="28" height="32" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l4.99 5L20.49 19l-5-5zM4 9.5A5.5 5.5 0 119.5 15 5.5 5.5 0 014 9.5z"/>
        </svg>
      </button>

      <form
        className={`${styles.form} ${isOpen ? styles.open : ''}`}
        onSubmit={handleSubmit}
        role="search"
        aria-hidden={!isOpen}
      >
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
    </div>
  );
}
