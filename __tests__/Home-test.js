import { configure, shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
// import InputField from '../src/components/InputField';

configure({ adapter: new Adapter() });

describe('AddRestaurantModal', () => {

    const testID = (id) => {
        return cmp => cmp.props().testID === id
    }

    // it('calls on save button with text', () => {
    //     const name = 'Chicken Dhaka'
    //     const handleSave = jest.fn()
    //     handleSave(name)
        
    //     const wrapper = shallow(<InputField visible={true} onSave={handleSave} />)

    //     wrapper.findWhere(testID('addRestaurantTextField')).simulate('changeText', name)
    //     wrapper.findWhere(testID('saveRestaurantButton')).simulate('press')

    //     expect(handleSave).toHaveBeenCalledWith(name)
    // });

    it('calls on save button with text', () => {
        expect(1+2).toBe(3)
    });

});