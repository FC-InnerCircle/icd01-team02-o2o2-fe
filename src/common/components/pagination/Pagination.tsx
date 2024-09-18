/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Button } from '../button';

type PaginationProps = {
  currentPage: number;
  itemPerPage?: number;
  totalCount: number;
  onClickPage: (page: number) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
};

const PAGE_BUTTON_COUNT = 5;

export default function Pagination({
  currentPage,
  itemPerPage = 10,
  totalCount,
  onClickPage,
  onClickPrevPage,
  onClickNextPage,
}: PaginationProps) {
  const pageGroup = Math.ceil(currentPage / PAGE_BUTTON_COUNT);
  const maxPage = Math.ceil(totalCount / itemPerPage);

  return (
    <div css={_paginationContainer}>
      <Button
        type="button"
        disabled={currentPage === 1}
        onClick={onClickPrevPage}
      >
        이전
      </Button>
      <div css={_pageButtonContainer}>
        {Array.from({ length: PAGE_BUTTON_COUNT }, (_, index) => {
          if (
            maxPage >= currentPage &&
            maxPage >= (pageGroup - 1) * PAGE_BUTTON_COUNT + index + 1
          ) {
            return (
              <Button
                key={index}
                css={[
                  _pageButton(
                    currentPage ===
                      index + (pageGroup - 1) * PAGE_BUTTON_COUNT + 1
                  ),
                ]}
                type="button"
                onClick={() =>
                  onClickPage(index + (pageGroup - 1) * PAGE_BUTTON_COUNT + 1)
                }
              >
                <span>{index + (pageGroup - 1) * PAGE_BUTTON_COUNT + 1}</span>
              </Button>
            );
          }
        })}
      </div>
      <Button
        type="button"
        disabled={currentPage >= maxPage}
        onClick={onClickNextPage}
      >
        다음
      </Button>
    </div>
  );
}

const _paginationContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const _pageButtonContainer = css`
  border-radius: 6px;
  padding: 4px;
`;

const _pageButton = (isSelected: boolean) => css`
  border-radius: 4px;
  background-color: #e3e4eb;
  color: #2f4cdd;

  ${isSelected === true &&
  `
      background-color: white;
      color: black;
  `}
`;
