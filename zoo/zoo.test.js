describe('Zoo', () => {
  let zoo;

  describe('constructor', () => {
    const address = '2600 Sunnyside Ave S, Salt Lake City, UT 84108';
    const entryFee = 12;
    const animals = ['white rhino', 'bengal tiger', 'polar bear'];
    beforeEach(() => {
      zoo = new Zoo(address, entryFee, animals);
    });
    it('should set the value of make to the value of the first parameter of the constructor function', () => {
      expect(zoo.address).toEqual(address);
    });
    it('should set the value of model to the value of the second parameter of the constructor function', () => {
      expect(zoo.entryFee).toEqual(entryFee);
    });
    it('should set the value of driveCapacity to the value of the second parameter of the constructor function', () => {
      expect(zoo.animals).toEqual(animals);
    });
    it('should default the resident discount to 10%(.10)', () => {
      expect(zoo.residentDiscount).toEqual(0.1);
    });
    it('should default the zoo status to open', () => {
      expect(zoo.status).toEqual(true);
    });
  });

  describe('hasAnimal', () => {
    beforeEach(() => {
      zoo = new Zoo('2300 Southern Blvd, Bronx, NY 10460', 10, ['ostrich', 'cheetah', 'penguin']);
    });
    it('should return true when passed in an animal in the list', () => {

      let result = zoo.hasAnimal('penguin');
      
      expect(result).toBe(true);
    });
    it('should return false if the animal passed in is not in the list', () => {
      let result = zoo.hasAnimal('t-rex');
      
      expect(result).toBe(false);
    });
  });

  describe('isOpen', () => {
    beforeEach(() => {
      zoo = new Zoo('201 Park Avenue, Hershey, PA 17033', 20, ['grizzly bear', 'white tiger', 'turtle']);
    });
    it('should return "YES" when the value of status is true', () => {
      zoo.status = true;
      
      let result = zoo.isOpen();

      expect(result).toEqual('YES');
    });
    it('should return "NO" when the value of status is false', () => {
      zoo.status = false;
      
      let result = zoo.isOpen();

      expect(result).toEqual('NO');
    });
  });

  describe('getResidentPrice', () => {
    beforeEach(() => {
      zoo = new Zoo('201 Park Avenue, Hershey, PA 17033', 20, ['grizzly bear', 'white tiger', 'turtle']);
    });
    it('should return 18 as the resident price when entryFee is 20 and resident discount is at its default value', () => {      
      let result = zoo.getResidentPrice();

      expect(result).toEqual(18);
    });
    it('should return 11 as the resident price when entryFee is 20 and resident discount is 45%', () => {
      zoo.residentDiscount = .5;
      let result = zoo.getResidentPrice();

      expect(result).toEqual(10);
    });
  });
});