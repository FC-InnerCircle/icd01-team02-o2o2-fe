import { type Limit } from '@pic-pik/core';
import LoadImage from './LoadImage';

describe('useImage Hook - Image Metadata Test', () => {
  it('should upload an image and display its metadata', () => {
    // 컴포넌트를 마운트
    cy.mount(<LoadImage />);

    // 로컬 테스트 이미지를 설정
    const filePath = 'images/danbi.jpeg'; // 실제 테스트 이미지 경로 설정

    cy.get('input[type="file"]').attachFile(filePath);

    // 메타데이터가 올바르게 표시되는지 확인
    cy.get('#metadata', { timeout: 10000 }).should('exist');
    cy.get('#width').should('contain', 'Width: 217'); // 너비 정보 확인
    cy.get('#height').should('contain', 'Height: 232'); // 높이 정보 확인
    cy.get('#size').should('contain', 'Size: 7890'); // 파일 크기 확인
    cy.get('#name').should('contain', 'Name: danbi.jpeg'); // 파일 이름 확인
    cy.get('#extension').should('contain', 'Extension: jpeg'); // 파일 확장자 확인
  });

  it('should trigger onError when image width exceeds limit', () => {
    // onError 핸들러를 정의
    const onError = cy.stub();

    // width를 100으로 제한
    const limit: Limit = {
      width: { max: 100, onError },
    };

    cy.mount(<LoadImage limit={limit} />);

    const filePath = 'images/danbi.jpeg';

    cy.get('input[type="file"]').attachFile(filePath);

    // onError 핸들러가 호출되었는지 확인
    cy.wrap(onError).should('have.been.calledOnce');

    // 메타데이터가 표시되지 않는지 확인
    cy.get('#metadata').should('not.exist');
  });
});
