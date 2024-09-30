import Button from './Button';

describe('Button load test', () => {
  it('Button should exist', () => {
    // 컴포넌트를 마운트
    cy.mount(<Button />);

    // 로컬 테스트 이미지를 설정

    cy.get('button').should('exist');
  });
});
