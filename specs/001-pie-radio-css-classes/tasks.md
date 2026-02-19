---

description: "Task list for PIE Radio CSS Classes implementation"
---

# Tasks: PIE Radio CSS Classes

**Input**: Design documents from `/specs/001-pie-radio-css-classes/`
**Prerequisites**: plan.md, spec.md (3 user stories), research.md, data-model.md, contracts/css-classes.md, quickstart.md

**Tests**: This is a proof of concept - NO testing required. Focus is on CSS implementation and basic manual verification only.

**Organization**: Tasks are grouped by user story to enable independent implementation of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **pie-css package**: `packages/tools/pie-css/`
- **CSS files**: `packages/tools/pie-css/css/helpers/`
- **Documentation**: `specs/001-pie-radio-css-classes/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Verify project structure and ensure design tokens are available

- [ ] T001 Verify pie-css project structure at packages/tools/pie-css/
- [ ] T002 Verify design tokens are imported in packages/tools/pie-css/css/input.css
- [ ] T003 Verify PostCSS build pipeline in packages/tools/pie-css/buildCss.ts

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create CSS file structure and update build process. MUST be complete before ANY user story can be implemented.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

**Architecture Note**: CSS classes must work on both native `<input type="radio">` elements AND div elements as single-element implementations (no wrapper required)

- [ ] T004 Create packages/tools/pie-css/css/helpers/radio.css file
- [ ] T005 Add @import './helpers/radio.css' to packages/tools/pie-css/css/input.css
- [ ] T006 Add base CSS structure with .c-radio-static class and CSS custom properties in packages/tools/pie-css/css/helpers/radio.css
- [ ] T007 Add .c-radio-static styles with pseudo-elements that work on both input[type="radio"] and div elements in packages/tools/pie-css/css/helpers/radio.css
- [ ] T008 Add appearance: none and input-specific resets for native radio inputs in packages/tools/pie-css/css/helpers/radio.css
- [ ] T009 Run yarn build in packages/tools/pie-css/ to verify CSS compilation succeeds

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Static Radio Markup for Non-Interactive Displays (Priority: P1) 🎯 MVP

**Goal**: Provide CSS classes that replicate unchecked and checked visual states of pie-radio component on single elements (native input or div)

**Manual Verification**: Create Storybook story with unchecked and checked states for both input[type="radio"] and div elements

### Implementation for User Story 1

- [ ] T010 [US1] Implement .c-radio-static--checked modifier in packages/tools/pie-css/css/helpers/radio.css
- [ ] T011 [US1] Add transform: scale(1) for :before pseudo-element when checked in packages/tools/pie-css/css/helpers/radio.css
- [ ] T012 [US1] Add transform: scale(1) for :after pseudo-element when checked in packages/tools/pie-css/css/helpers/radio.css
- [ ] T013 [US1] Run yarn build in packages/tools/pie-css/ to verify CSS compilation
- [ ] T014 [US1] Create Storybook story file at apps/pie-storybook/stories/pie-css-radio-static.stories.ts
- [ ] T015 [US1] Add unchecked examples for both input[type="radio"] and div elements to Storybook story
- [ ] T016 [US1] Add checked examples for both input[type="radio"] and div elements to Storybook story

**Checkpoint**: At this point, User Story 1 should be fully functional - unchecked and checked states render correctly on both element types

---

## Phase 4: User Story 2 - Disabled State Representation (Priority: P2)

**Goal**: Provide disabled state CSS modifier for showing inactive/unavailable radio buttons in static displays

**Manual Verification**: Apply disabled modifier and visually inspect appearance matches expected disabled state on both element types

### Implementation for User Story 2

- [ ] T017 [US2] Implement .c-radio-static--disabled modifier with CSS variable overrides in packages/tools/pie-css/css/helpers/radio.css
- [ ] T018 [US2] Override --radio-bg-color to var(--dt-color-disabled-01) for disabled state in packages/tools/pie-css/css/helpers/radio.css
- [ ] T019 [US2] Override --radio-border-color to var(--dt-color-border-default) for disabled state in packages/tools/pie-css/css/helpers/radio.css
- [ ] T020 [US2] Implement .c-radio-static--checked.c-radio-static--disabled combination styles in packages/tools/pie-css/css/helpers/radio.css
- [ ] T021 [US2] Override --radio-dot-bg-color to var(--dt-color-content-disabled) for checked+disabled in packages/tools/pie-css/css/helpers/radio.css
- [ ] T022 [US2] Override --radio-bg-color--checked to var(--dt-color-disabled-01) for checked+disabled in packages/tools/pie-css/css/helpers/radio.css
- [ ] T023 [US2] Run yarn build in packages/tools/pie-css/ to verify CSS compilation
- [ ] T024 [US2] Add disabled state examples for both input[type="radio"] and div elements to Storybook story

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently - disabled states render correctly

---

## Phase 3 (continued): User Story 3 - Error State for Form Validation Displays (Priority: P3)

**Goal**: Provide error state CSS modifier for showing radio buttons in error state alongside validation messages using only CSS

**Manual Verification**: Apply error modifier and visually inspect red border color appears correctly on both element types

### Implementation for User Story 3

- [ ] T025 [US3] Implement .c-radio-static--error modifier with CSS variable overrides in packages/tools/pie-css/css/helpers/radio.css
- [ ] T026 [US3] Override --radio-bg-color--checked to var(--dt-color-support-error) for error state in packages/tools/pie-css/css/helpers/radio.css
- [ ] T027 [US3] Override --radio-border-color to var(--dt-color-support-error) for error state in packages/tools/pie-css/css/helpers/radio.css
- [ ] T028 [US3] Verify .c-radio-static--checked.c-radio-static--error combination works correctly in packages/tools/pie-css/css/helpers/radio.css
- [ ] T029 [US3] Run yarn build in packages/tools/pie-css/ to verify CSS compilation
- [ ] T030 [US3] Add error state examples for both input[type="radio"] and div elements to Storybook story

**Checkpoint**: All user stories should now be independently functional - all states (unchecked, checked, disabled, error) render correctly

---

## Phase 4: Documentation & Polish

**Purpose**: Basic documentation and final validation for proof of concept

- [ ] T031 [P] Update packages/tools/pie-css/README.md with basic radio static CSS classes section
- [ ] T032 [P] Add usage examples showing both input[type="radio"] and div usage patterns to README
- [ ] T033 [P] Add warning about non-interactive usage to README
- [ ] T034 Verify Storybook story displays all states correctly for both element types
- [ ] T035 Run yarn lint:style in packages/tools/pie-css/
- [ ] T036 Fix any style linting issues found
- [ ] T037 Verify dist/index.css includes radio CSS classes after build
- [ ] T038 Run complete build: yarn build at repository root
- [ ] T039 Verify no breaking changes to existing pie-css functionality
- [ ] T040 Test that native input[type="radio"] functionality (clicking, keyboard navigation) still works when using .c-radio-static class

**Checkpoint**: Proof of concept complete - all states implemented with Storybook demo showing both input and div implementations

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3)**: All depend on Foundational phase completion
  - User stories can proceed in parallel (if staffed) after Phase 2
  - Or sequentially in priority order (US1 → US2 → US3)
- **Documentation & Polish (Phase 4)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Independently verifiable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Independently verifiable

### Within Each User Story

- CSS implementation before HTML demo files
- HTML demo files for manual verification
- All states for a story must work before moving to next priority

### Parallel Opportunities

- All Setup tasks (T001-T003) can run in parallel
- User Stories 1, 2, and 3 can be implemented in parallel after Phase 2 completes (if team capacity allows)
- Phase 4: T028-T030 (documentation tasks) can run in parallel

---

## Parallel Example: User Stories (After Phase 2)

```bash
# Implement all user stories in parallel:
Task: "[US1] Implement checked state CSS"
Task: "[US2] Implement disabled state CSS"
Task: "[US3] Implement error state CSS"
```

## Parallel Example: Documentation

```bash
# Update all documentation in parallel:
Task: "Update README with radio static CSS classes section"
Task: "Add usage examples to README"
Task: "Add warning about non-interactive usage to README"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T003)
2. Complete Phase 2: Foundational (T004-T009) - CRITICAL - blocks all stories
3. Complete Phase 3: User Story 1 (T010-T016)
4. **STOP and VALIDATE**: Launch Storybook and verify unchecked/checked states work on both input[type="radio"] and div elements
5. **TEST NATIVE INPUT**: Verify clicking native input still works with class applied
6. Optional: Create basic documentation before proceeding to P2/P3

### Incremental Delivery (Proof of Concept)

1. Complete Setup + Foundational (Phases 1-2) → Foundation ready with single-element architecture
2. Add User Story 1 (Phase 3, T010-T016) → Unchecked/checked states working on both element types (MVP!)
3. Add User Story 2 (Phase 3, T017-T024) → Disabled states added for both element types
4. Add User Story 3 (Phase 3, T025-T030) → Error states added for both element types
5. Complete documentation and polish (Phase 4)
6. Each story adds value without breaking previous states

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together (Phases 1-2)
2. Once Foundational is done:
   - Developer A: User Story 1 (T010-T016)
   - Developer B: User Story 2 (T017-T024)
   - Developer C: User Story 3 (T025-T030)
3. Once stories complete:
   - Team collaborates on documentation and polish (Phase 4)

---

## Notes

- **Proof of Concept**: No formal testing phase - focus on implementation and manual verification only
- **Single-Element Architecture**: CSS classes work on both native `<input type="radio">` elements AND `<div>` elements (no wrapper required)
- **Native Input Support**: When applied to `<input type="radio">`, native functionality (click, keyboard, form submission) is preserved
- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and verifiable
- All CSS classes use BEM methodology with .c- prefix
- All colors and sizes reference design tokens (no hardcoded values)
- No interactive states (hover, focus, active) - static display only
- No animations or transitions
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Run yarn build after CSS changes to verify compilation
- Manual visual verification via Storybook for both element types

---

## Success Criteria Summary

Based on spec.md requirements (adapted for proof of concept):

- **SC-001**: Developers can create a visually identical radio button using only HTML and CSS classes ✓
- **SC-002**: Static radio CSS classes visually match pie-radio Web Component (manual verification) ✓
- **SC-004**: Bundle size impact is minimal (<2KB for radio CSS classes) ✓
- **SC-005**: Documentation includes basic usage examples (unchecked, checked, disabled, error) ✓
- **SC-006**: CSS classes successfully integrate with existing pie-css build process without breaking changes ✓

---

## Total Task Count: 40 tasks

**Task Count by Phase:**
- Phase 1 (Setup): 3 tasks
- Phase 2 (Foundational): 6 tasks
- Phase 3 (User Stories 1-3): 21 tasks
- Phase 4 (Documentation & Polish): 10 tasks

**Task Count by User Story:**
- Setup/Foundational: 9 tasks (22.5%)
- User Story 1 (P1): 7 tasks (17.5%)
- User Story 2 (P2): 8 tasks (20.0%)
- User Story 3 (P3): 6 tasks (15.0%)
- Documentation & Polish: 10 tasks (25.0%)

**Parallel Opportunities Identified:**
- Setup phase: 3 tasks can run in parallel
- User Stories 1-3: Can be implemented in parallel after Phase 2 (21 implementation tasks)
- Documentation: 3 tasks can run in parallel

**Manual Verification Criteria:**
- User Story 1: View Storybook story and visually inspect unchecked/checked states on both input[type="radio"] and div elements
- User Story 2: View Storybook story and visually inspect disabled appearance on both element types
- User Story 3: View Storybook story and visually inspect error red border on both element types
- Verify native input functionality (click, keyboard) still works when class applied to input[type="radio"]

**Suggested MVP Scope:**
- Phase 1 (Setup): T001-T003
- Phase 2 (Foundational): T004-T009
- Phase 3 (User Story 1): T010-T016
- Total MVP: 16 tasks (40.0% of total)
- MVP delivers: Unchecked and checked static radio states working on both input and div elements with Storybook demo

**Format Validation:**
✅ ALL 40 tasks follow the required checklist format:
- Checkbox prefix: `- [ ]`
- Task ID: Sequential (T001-T040)
- [P] marker: Present only on parallelizable tasks
- [Story] label: Present only on user story tasks (US1, US2, US3)
- Description: Includes clear action and file path
