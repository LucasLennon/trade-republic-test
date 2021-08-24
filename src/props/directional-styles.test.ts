import { createStyle } from './directional-styles';

describe('Directional Styles', () => {
  it('should mount singular string', () => {
    expect(
      createStyle({
        single: '10px',
        axis: { x: '', y: '' },
        directions: { top: '', bottom: '', left: '', right: '' },
      })
    ).toBe('10px');
  });

  it('should mount only one axis', () => {
    expect(
      createStyle({
        single: '',
        axis: { x: '10px', y: '' },
        directions: { top: '', bottom: '', left: '', right: '' },
      })
    ).toBe('0 10px');
  });

  it('should mount both axis', () => {
    expect(
      createStyle({
        single: '',
        axis: { x: '10px', y: '10px' },
        directions: { top: '', bottom: '', left: '', right: '' },
      })
    ).toBe('10px 10px');
  });

  it('should mount only one direction', () => {
    expect(
      createStyle({
        single: '',
        axis: { x: '', y: '' },
        directions: { top: '10px', bottom: '', left: '', right: '' },
      })
    ).toBe('10px 0 0 0');
  });

  it('should mount all directions', () => {
    expect(
      createStyle({
        single: '',
        axis: { x: '', y: '' },
        directions: { top: '10px', bottom: '10px', left: '10px', right: '10px' },
      })
    ).toBe('10px 10px 10px 10px');
  });
});
