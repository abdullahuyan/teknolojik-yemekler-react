describe('Pizza Sipariş Formu Testi', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/orderpage');
  });

  it('Inputa metin girilebilmeli', () => {
    cy.get('input[name="name"]')
      .type('Abdullah Uyan')
      .should('have.value', 'Abdullah Uyan');
  });

  it('Birden fazla malzeme seçilebilmeli', () => {
    const malzemeler= ["Sucuk", "Domates", "Mısır", "Biber"];

    malzemeler.forEach(malzeme => {
      cy.get(`input[type="checkbox"][value="${malzeme}"]`).check().should('be.checked');
    });
  });

  it('Form başarıyla gönderilebilmeli', () => {

    cy.get('input[name="name"]').type('Abdullah Uyan');
    cy.get('input[type="radio"][value="Orta"]').check();
    cy.get('select[name="hamur"]').select('İnce');
    
    const malzemeler = ["Sucuk", "Domates", "Mısır", "Biber"];
    malzemeler.forEach(malzeme => {
      cy.get(`input[type="checkbox"][value="${malzeme}"]`).check();
    });

    cy.get('button[type="submit"]')
      .should('not.be.disabled')
      .click();

    cy.url().should('include', '/success');
  });
});