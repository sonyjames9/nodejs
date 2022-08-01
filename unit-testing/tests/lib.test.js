const lib = require("../lib");
const db = require("../db")
const mail = require("../mail")

describe("absolute", () => {
  it("should return positive value if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return poitive value if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Ammu");
    expect(result).toMatch(/Ammu/);
    expect(result).toContain("Ammu");
  });
});

describe("get_currencies", () => {
  let arrray_currencies = lib.getCurrencies();
  let currency = ["USD", "EUR", "AUD"];
  it("should return currencies", () => {
    // for (let i = 0; i < arrray_currencies.length; i++) {

    //TO Specific
    // expect(arrray_currencies[i] === (currency[i]));

    // Proper way
    expect(arrray_currencies).toContain("USD");
    expect(arrray_currencies).toContain("AUD");
    expect(arrray_currencies).toContain("EUR");

    // Ideal way
    expect(arrray_currencies).toEqual(expect.arrayContaining(currency));
    // }
  });

  it("should return currencies", () => {
    expect(currency).toEqual(expect.arrayContaining(arrray_currencies));
  });
});

describe("get_product", () => {
  it("should return product with the given id", () => {
    const result = lib.getProduct(1);
    //expect(result).toBe({ id: 1, price: 10 });
    expect(result).toEqual({ id: 1, price: 10 });
    expect(result).toMatchObject({ id: 1, price: 10 });
  });
});

describe("get_product", () => {
  it("should return product with the given id", () => {
    const result = lib.getProduct(1);
    expect(result).toMatchObject({ id: 1 });
  });
});

describe("get_product", () => {
  it("should return product with the given id", () => {
    const result = lib.getProduct(1);
    expect(result).toHaveProperty("id", 1);
  });
});

describe("register user", () => {
  it("should throw an exception if the user is falsy", () => {
    /*  To throw an falsy username, we can use below values
    [null, undefined, NaN, '', 0, false] */

    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });

  it("should return a user object if valid username is passed", () => {
    const result = lib.registerUser("ammu");
    expect(result).toMatchObject({ username: "ammu" });
    expect(result.id).toBeGreaterThan(0);
  });
});

describe("apply_discount", () => {
  it("should apply 10% discount if customer has more than 10 points", () => {
    db.getCustomerSync = function (customerId) {
      console.log('Fake reading customer')
      return { id: customerId, points: 20 };
    }
    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

describe('notify customer', () => {
  it("should send an email to the customer", () => {

    db.getCustomerSync = jest.fn().mockReturnValue({ email: 'a' });
    mail.send = jest.fn();
      // .mockReturnValue({ mail_sent: true })
    
    lib.notifyCustomer({ customerId: 1 });

    // expect(mail_sent).toBe(true);
    expect(mail.send).toHaveBeenCalled();
    // expect(mail.send).toHaveBeenCalledWith('a');

    expect(mail.send.mock.calls[0][0]).toBe('a');
    expect(mail.send.mock.calls[0][1]).toMatch(/order/);
  });
});