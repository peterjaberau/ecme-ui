/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  closeSearchPanel,
  SearchQuery,
  setSearchQuery,
  findNext,
  findPrevious,
  replaceNext,
  replaceAll,
  openSearchPanel,
} from '@codemirror/search';
import { MdSearch, MdArrowUpward, MdArrowDownward, MdFindReplace, MdOutlineFindReplace } from "react-icons/md";
import './SearchBox.css';
import { Input as InputComponent, InputGroup } from '@chakra-ui/react'
import { Button, IconButton } from '@chakra-ui/react';
import { Tooltip as ToolTip } from '@/views/actors/playground/_components/Tooltip'
import { SelectionRange } from '@codemirror/state';
import { useHotkeys } from 'react-hotkeys-hook';

export const handleSearchPanel = (view) => {
  const dom = document.createElement('div');
  createRoot(dom).render(<SearchPanel view={view} />);
  return { dom, top: true };
};

function SearchPanel({ view }) {
  const [searchText, setSearchText] = useState('');
  const [replaceText, setReplaceText] = useState('');

  const handleSearch = (replaceTerm) => {
    const query = new SearchQuery({
      search: searchText,
      caseSensitive: false,
      literal: true,
      regexp: false,
      replace: replaceTerm,
    });
    view.dispatch({ effects: setSearchQuery.of(query) });

    const currentPos = view.state.selection.main.head;
    view.dispatch({
        //@ts-ignore
      selection: SelectionRange.create(currentPos, currentPos),
    });
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      handleSearch(replaceText);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchText, replaceText]);

  const [shortcutEnabled, setShortcutEnabled] = useState(false);

  // Shortcuts for search input field
  useHotkeys(
    ['shift+enter', 'enter'],
    (event, handler) => {
      if (handler.shift && handler.keys[0] === 'enter') findPrevious(view);
      else if (handler.keys[0] === 'enter') findNext(view);
    },
    {
      enabled: shortcutEnabled,
      enableOnFormTags: true,
    }
  );

  const displaySearchField = () => (
    <div className="search-replace-inputs">
        <InputGroup startElement={<MdSearch />}>
            <InputComponent
                onChange={(e) => setReplaceText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && replaceNext(view)}
                placeholder="Replace"
                size="sm"
                value={replaceText}
                aria-label="Replace text"
            />
        </InputGroup>
    </div>
  );

  const displaySearchButtons = () => (
    <div className="search-buttons">
      <ToolTip message={'Previous'}>
        <IconButton
          onClick={() => findPrevious(view)}
          size="md"
          variant="ghost"
          aria-label="Previous match"
        >
            <MdArrowUpward />
        </IconButton>
      </ToolTip>
      <div className="navbar-seperator"></div>
      <ToolTip message={'Next'}>
        <IconButton
          onClick={() => findNext(view)}
          size="md"
          variant="ghost"
          aria-label="Next match"
        >
            <MdArrowDownward />
        </IconButton>
      </ToolTip>
    </div>
  );

  const displayReplaceButtons = () => (
    <div className="replace-buttons">
      <ToolTip message={'Replace'}>
        <IconButton
          onClick={() => replaceNext(view)}
          size="md"
          variant="ghost"
          aria-label="Replace"
        >
            <MdFindReplace/>
        </IconButton>
      </ToolTip>
      <div className="navbar-seperator"></div>
      <ToolTip message={'Replace all'}>
        <IconButton
          onClick={() => replaceAll(view)}
          size="md"
          variant="ghost"
          aria-label="Replace all"
        >
            <MdOutlineFindReplace/>
        </IconButton>
      </ToolTip>
      <div className="navbar-seperator"></div>
      <IconButton
        onClick={() => closeSearchPanel(view)}
        size="md"
        variant="ghost"
        aria-label="Close search panel"
        className="!w-[28px]"
      />
    </div>
  );

  return (
    <div className="search-panel-wrapper">
      <div className="search-panel">
        {displaySearchField()}
        {displaySearchButtons()}
      </div>
      {displayReplaceButtons()}
    </div>
  );
}

export const SearchBtn = ({ view }) => {
  return (
    <div
      className="d-flex justify-content-end w-100 position-absolute tw-pt-[3px] tw-pr-[4px] codehinter-search-btn-wrapper"
      style={{ top: 0 }}
    >
      <IconButton
        size="sm"
        variant="outline"
        aria-label="Open search panel"
        className="codehinter-search-btn"
        onClick={() => openSearchPanel(view)}
      >
          <MdSearch />
      </IconButton>
    </div>
  );
};
