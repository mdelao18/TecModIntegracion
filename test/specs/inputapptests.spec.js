import InputPage from '../pageobjects/inputs.page';

describe('Inputs page with Number textbox', () => {
    beforeAll(async function(){
        console.log('Initializing the test cases execution');
    });
    beforeEach(async function(){
        console.log('Open Inputs page');
        await InputPage.open('inputs');
    });
    afterAll(async function(){
        console.log('Go to Available Examples page after run all test cases');
        await InputPage.goToMainPage();
    });
   afterEach(async function(){
        console.log('Test case finished');
    });
    it('Should get the page title', async () => {
        console.log('1 test');
        await expect(InputPage.getTitle).toHaveTextContaining('Inputs');
    });
    it('Add the number 5 manually', async () => {
        console.log('2 test');
        await InputPage.addNumberManually();
        expect(InputPage.getNumberTextBox).toHaveTextContaining(5);
    });
    it('Should get the page paragraph', async () => {
        console.log('3 test');
        await expect(InputPage.getParagraph).toHaveTextContaining('Number');
    });
});