describe("CLARK-NATIVE APP AUTOMATION", () => {
  it("ACCEPT COOKIES", async () => {
    console.log("User is accepted cookies..");
    // await driver.setImplicitWaitTimeout(100300);
    // await this.driver.setImplicitTimeout(timeout);
    // await this.pauseTest(100300);

    await browser.setImplicitTimeout(100300);
    const cookies = await $(
      '//android.widget.Button[@text=" Alle Cookies akzeptieren"]'
    );

    await cookies.click();
    await browser.pause(1000);

    const login = await $('//*[@text="Einloggen"]');
    await login.click();
    await browser.pause(1000);

    const inputLoginEmailTextField = await $(
      '//*[@resource-id="mandate_login_email"]'
    );
    const inputLoginPasswordTextField = await $(
      '//*[@resource-id="mandate_login_password"]'
    );
    await inputLoginEmailTextField.addValue("ssasasas");
    await inputLoginPasswordTextField.addValue("Pass212");

    await browser.pause(1000);
  });

  it("REJECT COOKIES", async () => {
    console.log("User is rejected cookies..");
  });

  it("MORE INFORMATION", async () => {
    console.log("User would like to check more info..");
  });
});
