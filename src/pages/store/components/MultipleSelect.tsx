/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';

import fonts from 'styles/font';
import colors from 'styles/color';

import { TAG_COLORS } from '../constants';

import type { MultiSelectProps } from '../types';
import useClickOutside from 'common/hooks/useClickOutside';

const MultiSelect = ({ options }: MultiSelectProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]); // 선택된 옵션 상태
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // 선택된 카테고리 (단일 선택)
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림 상태

  const { ref: dropdownRef } = useClickOutside<HTMLDivElement>(() =>
    setIsOpen(false),
  );

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      handleCategorySelectClick(category);
    } else {
      handleCategoryDiffClick(category);
    }
  };

  const handleCategorySelectClick = (category: string) => {
    // 선택된 카테고리를 클릭하면 선택 해제
    setSelectedCategory(null);
    setSelectedOptions((prev) =>
      prev.filter(
        (option) => option !== category && !options[category].includes(option),
      ),
    );
  };

  const handleCategoryDiffClick = (category: string) => {
    // 다른 카테고리를 선택하면 기존 선택을 교체
    setSelectedCategory(category);
    setSelectedOptions((prev) => [
      category, // 새로 선택된 카테고리를 추가
      ...prev.filter(
        (option) =>
          !options[selectedCategory || '']?.includes(option) &&
          option !== selectedCategory,
      ), // 이전 선택 제거
      ...options[category].filter((option) => prev.includes(option)), // 현재 선택된 옵션 유지
    ]);
  };

  const handleOptionClick = (_: string, option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };

  const handleRemoveAll = () => {
    setSelectedCategory(null);
    setSelectedOptions([]);
  };

  return (
    <div css={_selectBoxContainer} ref={dropdownRef}>
      <label css={_label}>음식점 카테고리</label>
      <div css={_selectBox} onClick={toggleDropdown}>
        {selectedOptions.length > 0 ? (
          <div css={_selectBoxOpen}>
            <div css={_selectedTagsContainer}>
              {selectedOptions.map((option, index) => (
                <span key={option} css={_tagStyle(index)}>
                  {option}
                </span>
              ))}
            </div>
            <span onClick={handleRemoveAll}>X</span>
          </div>
        ) : (
          '음식점의 카테고리를 선택해주세요'
        )}
      </div>
      {isOpen && (
        <div css={_dropdownMenu}>
          {Object.entries(options).map(([category, items]) => (
            <div key={category}>
              <label css={_categoryStyle}>
                <input
                  type="radio" // 단일 선택을 위해 체크박스 대신 라디오 버튼 사용
                  checked={selectedCategory === category}
                  onChange={() => handleCategoryClick(category)}
                />
                {category}
              </label>
              {/* 상세 항목은 항상 노출되지만, 카테고리가 선택된 경우 체크 가능 */}
              <div css={_optionsListStyle}>
                {items.map((option, idx) => (
                  <label key={option} css={_optionStyle}>
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(option)}
                      disabled={selectedCategory !== category} // 다른 카테고리가 선택되면 비활성화
                      onChange={() => handleOptionClick(category, option)}
                    />
                    <span
                      css={_optionIn(selectedOptions.includes(option), idx)}
                    >
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;

const _selectBoxContainer = css`
  position: relative;
  width: 75%;
`;

const _selectBox = css`
  border: 1px solid #e0e0e0;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${colors.white};
  &:hover {
    border-color: #1890ff;
  }
`;

const _selectBoxOpen = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const _dropdownMenu = css`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #e0e0e0;
  background-color: ${colors.white};
  border-radius: 4px;
  margin-top: 4px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
`;

const _optionsListStyle = css`
  padding-left: 16px;
  border-left: 1px solid #e0e0e0;
  margin-top: 4px;
`;

const _categoryStyle = css`
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  input[type='radio'] {
    margin-right: 8px;
  }
`;

const _optionStyle = css`
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  input[type='checkbox'] {
    margin-right: 8px;
  }
`;

const _optionIn = (isSelected: boolean, idx: number) => css`
  background-color: ${isSelected
    ? TAG_COLORS[idx + (1 % TAG_COLORS.length)]
    : null};
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  margin: 2px;
`;

const _selectedTagsContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const _tagStyle = (index: number) => css`
  background-color: ${TAG_COLORS[index % TAG_COLORS.length]};
  border: 1px solid ${TAG_COLORS[index % TAG_COLORS.length]};
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  margin: 2px;
`;

const _label = [
  css`
    color: ${colors.textThird};
  `,
  fonts['16_600'],
];
