# Copilot Instructions for this Workspace

## Project context
- This is a Vite + React + TypeScript project.
- Main app code lives in `src/`.
- UI is component-based under `src/components/`.
- Game logic is in `src/utils/bingoLogic.ts` and `src/hooks/useBingoGame.ts`.

## Coding guidelines
- Keep changes minimal and scoped to the user request.
- Preserve existing naming and file structure unless explicitly asked to refactor.
- Prefer TypeScript-first solutions with explicit types for public function signatures.
- Avoid introducing new dependencies unless necessary.
- Keep UI and logic separated: components for rendering, hooks/utils for behavior.

## Testing and validation
- If logic changes, update or add tests near `src/utils/bingoLogic.test.ts` patterns.
- Before finishing, run the most relevant checks:
  - `npm run test`
  - `npm run build`
- Do not fix unrelated failures unless asked.

## UX and implementation expectations
- Follow existing UI patterns in `src/components/`.
- Avoid adding extra screens, features, or styling systems unless requested.
- Prefer simple, readable implementations over clever abstractions.

## Response behavior
- Reference changed files explicitly in responses.
- Summarize what changed, why, and how it was validated.
- Ask one clear next-step question when relevant.
