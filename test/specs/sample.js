describe("CLARK-NATIVE APP AUTOMATION", () => {
  it("ACCEPT COOKIES AND PROCCED TO LOGIN SCREEN", async () => {
    console.log("User is accepted cookies..");

    // WAIT UNTIL APP OPENS
    await browser.setImplicitTimeout(100300);
    const cookies = await $(
      '//android.widget.Button[@text=" Alle Cookies akzeptieren"]'
    );
    await cookies.click();
    await browser.pause(1000);

    // LOGIN
    const login = await $('//*[@text="Einloggen"]');
    await login.click();
    await browser.pause(1000);

    //LOGIN SCREEEN AND SET VALUES
    const inputLoginEmailTextField = await $(
      '//*[@resource-id="mandate_login_email"]'
    );
    const inputLoginPasswordTextField = await $(
      '//*[@resource-id="mandate_login_password"]'
    );
    await inputLoginEmailTextField.addValue("Sanjay@gmail.com");
    await inputLoginPasswordTextField.addValue("Password9192");
    await browser.pause(1000);

    const submitLoginCred = await $('//*[@text=" Einloggen "]');
    await submitLoginCred.click();
    await browser.pause(2000);

    // const invalidCred = await $(
    //   '//*[@text="Bitte überprüfe deine Anmeldedaten"]'
    // );
    // await expect(invalidCred).toHaveText("Bitte überprüfe deine Anmeldedaten");
    // await browser.pause(2000);
  });

  it("ACCEPT COOKIES AND PROCCED TO REGISTRATION SCREEN", async () => {
    console.log("User is accepted cookies..");
    // WAIT UNTIL APP OPENS
    await browser.setImplicitTimeout(100300);
    const cookies = await $(
      '//android.widget.Button[@text=" Alle Cookies akzeptieren"]'
    );
    await cookies.click();
    await browser.pause(1000);

    // REGISTRATION
    const registrieren = await $('//*[@text="Jetzt registrieren"]');
    await registrieren.click();
    await browser.pause(1000);

    //REGISTRATION SCREEEN AND SET VALUES
    const inputRegFirstNameTextField = await $(
      '//*[@resource-id="mandate_login_email"]'
    );
    const inputRegLastNameTextField = await $(
      '//*[@resource-id="mandate_login_password"]'
    );
    const inputRegEmailTextField = await $(
      '//*[@resource-id="mandate_login_password"]'
    );

    const submitRegCred = await $('//*[@text="Weiter"]');
  });
  it("REJECT COOKIES", async () => {
    console.log("User is rejected cookies..");
  });

  it("MORE INFORMATION", async () => {
    console.log("User would like to check more info..");
  });
});
