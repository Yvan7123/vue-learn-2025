const fetchData = require('./fetchData')


test('the data is peanut butter', async () => {
  await expect(fetchData(true, 'peanut butter')).resolves.toBe('peanut butter');
});


test('the fetch fails with an error', async () => {
  await expect(fetchData(false, "error1")).rejects.toMatch('error');
});