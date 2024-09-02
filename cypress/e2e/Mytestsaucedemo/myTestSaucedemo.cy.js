describe('Creación de usuario', { testIsolation: false }, () => {

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Compra con user 1', () => {
 
    //LOGUIN
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.wait(5000)

    // Agregar productos a carrito de compras
    cy.addAllProducts()
    cy.wait(5000)

    //Ir al carrito de compras
    cy.get('[data-test="shopping-cart-link"]').click()

    //checkout
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type("user")
    cy.get('[data-test="lastName"]').type('test')
    cy.get('[data-test="postalCode"]').type('C1440')
    cy.get('[data-test="continue"]').click()
    
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').contains('Thank you for your order!').should('be.visible')
    .then(() => {
      cy.log('Checkout válido')
  });

    //Logout
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()
  
  });

  it('Compra con user 2', () => {
 
    //LOGUIN
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('problem_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.wait(5000)
    // Agregar productos a carrito de compras
    cy.addAllProducts()
    cy.wait(5000)
    //Ir al carrito de compras
    cy.get('[data-test="shopping-cart-link"]').click()

    //checkout
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type("user")
    cy.get('[data-test="lastName"]').type('test')
    cy.get('[data-test="postalCode"]').type('C1440')
    cy.get('[data-test="continue"]').click()
    
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').contains('Thank you for your order!').should('be.visible')
    .then(() => {
      cy.log('Checkout válido')
  });

    //Logout
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()
  
  });



});
