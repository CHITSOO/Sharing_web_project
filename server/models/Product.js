const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String,
    },
    /*price: {
        type: Number,
        default: 0
    },*/
    images: {
        type: Array,
        default: []
    },
    /*sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },*/

    styles: {
        type: Number,//( Array로 바꿔서 )여러개 선택가능하게
        default: 1   //ProductInfo에서 style이 Array니깐 있는 정보 다 나올듯
    }/*,

    views: {
        type: Number,
        default: 0
    }*/
}, { timestamps: true }) //자동적으로 등록시간 업데이트

productSchema.index({ //검색할 때 어디에 중점적으로 걸려야 하는지
    title: 'text',
    description: 'text'
}, {
    weights: { //control search with weights 찾아볼 수 있음
        title: 5,
        description: 1
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = { Product }