import { BaseCvaImplementationDirective } from './base-cva-implementation.directive';

// Create concrete test class
class TestDirective extends BaseCvaImplementationDirective<string> {}

describe('BaseCvaImplementationDirective', () => {
  let directiveInstance: TestDirective;

  beforeEach(() => {
    directiveInstance = new TestDirective();
  });

  it('should create an instance', () => {
    expect(directiveInstance).toBeTruthy();
  });

  it('should call onChange when value changes', () => {
    const onChangeSpy = jasmine.createSpy('onChange');
    directiveInstance.registerOnChange(onChangeSpy);

    directiveInstance.value = 'test';
    expect(onChangeSpy).toHaveBeenCalledWith('test');
  });

  it('should call onTouched when blur occurs', () => {
    const onTouchedSpy = jasmine.createSpy('onTouched');
    directiveInstance.registerOnTouched(onTouchedSpy);

    directiveInstance.onTouched();
    expect(onTouchedSpy).toHaveBeenCalled();
  });
});
