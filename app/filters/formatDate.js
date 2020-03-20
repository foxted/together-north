import moment from 'moment';

export default (value) => {
    if(value instanceof Date) {
        return moment(value).calendar();
    }

    return value;
}
