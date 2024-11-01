import React from 'react';
import styled from '@emotion/styled';
import { MenuPreviewModalProps } from './index.types';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #f5f5f5;
  border-radius: 16px;
  width: 90%;
  max-width: 420px;
  padding: 36px;
`;

const MenuImageWrap = styled.div`
  width: 100%;
  height: 200px;
  background: #c4c4c4;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  overflow: hidden;
`;

const MenuImage = styled.img`
  width: 100%;
`;

const MenuTitle = styled.h2`
  margin: 16px 0;
  font-size: 24px;
`;

const MenuDescription = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
`;

const OptionSection = styled.div`
  margin: 16px 0;
`;

const OptionTitle = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
`;

const OptionItem = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const OptionCheckbox = styled.input`
  margin-right: 8px;
`;

const Price = styled.span`
  margin-left: auto;
`;

const CloseButton = styled.button`
  width: 100%;
  background: #6779ff;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 16px;
`;

const MenuPreviewModal: React.FC<MenuPreviewModalProps> = ({
  onClose,
  menuImage,
  menuTitle,
  menuDescription,
  optionSections,
}) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <MenuImageWrap>
          <MenuImage src={menuImage} alt={`preview_${menuTitle}`} />
        </MenuImageWrap>
        <MenuTitle>{menuTitle}</MenuTitle>
        <MenuDescription>{menuDescription}</MenuDescription>

        {optionSections.map((section, sectionIndex) => (
          <OptionSection key={sectionIndex}>
            <OptionTitle>
              {section.title} ({section.requirement} - {section.type})
            </OptionTitle>
            {section.options.map((option, index) => (
              <OptionItem key={index}>
                <OptionCheckbox
                  type="checkbox"
                  defaultChecked={option.checked}
                  disabled={section.type === '단일'}
                />{' '}
                {option.name} <Price>+ ₩{option.price}</Price>
              </OptionItem>
            ))}
          </OptionSection>
        ))}

        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default MenuPreviewModal;
