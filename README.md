# React Typeahead Practice

## Goal
Create high quality react typeahead application.

- use TypeScript
- writing tests with react-testing-library
- create sensible interface
- search with pagination or infinite scroll

## Requirement

- show Input with some empty ui
- when start typing, should show loading ui (can be anything kind of ui, break your imagination!)
- can clear search and back to initial state (empty ui)
- show list of users (can be just avatar & name)

**Extra**

- debounce on type around 200ms (meaning only call search after user finish typing for 200ms)
- search with pagination or infinite scroll

## Recommended Packages

- [swr](https://swr.vercel.app/) or [react-query](https://react-query.tanstack.com/)

## API

- https://api.github.com/search/users?q=name

## Get started

```bash
yarn install
yarn start
```
