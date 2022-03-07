describe('search', () => {
    it('should return [\'dare\', \'greatly\'] when the search term is \'re\' and the text is \'Those who dare to fail miserably can achieve greatly\'', () => {
    const expected = ['dare', 'greatly'];
    const result = search('Those who dare to fail miserably can achieve greatly', 're');
    
    expect(result).toEqual(expected);
  });
  it('should return [\'Success\', \'bounce\'] when the search term is \'ce\' and the text is \'Success is how high you bounce when you hit bottom.\'', () => {
    const expected = ['Success', 'bounce'];
    const result = search('Success is how high you bounce when you hit bottom.', 'ce');
    
    expect(result).toEqual(expected);
  });
  it('should return [\'The\', \'the\'] them when the search term is \'the\' and the text is \'The Rabbit and the hare\'', () => {
    const expected = ['The', 'the'];
    const result = search('The Rabbit and the hare', 'the');
    
    expect(result).toEqual(expected);
  });
  it('should return [\'discuss\', \'discuss\', \'discuss\'] when the search term is \'discuss\' and the text is \'Great minds discuss ideas; average minds discuss events; small minds discuss people.\'', () => {
    const expected = ['discuss', 'discuss', 'discuss'];
    const result = search('Great minds discuss ideas; average minds discuss events; small minds discuss people.', 'discuss');
    
    expect(result).toEqual(expected);
  });
  it('should return [] when the search term is \'random\' and the text is \'The question isn’t who is going to let me; it’s who is going to stop me.\'', () => {
    const expected = [];
    const result = search('The question isn’t who is going to let me; it’s who is going to stop me.', 'random');
    
    expect(result).toEqual(expected);
  });
});