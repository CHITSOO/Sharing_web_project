import React from 'react'
import { Button, Descriptions } from 'antd';
import { useDispatch } from 'react-redux';
//import { addToCart } from '../../../../_actions/user_actions';
function ProductInfo(props) {
    const dispatch = useDispatch();


    const clickHandler = () => {
        //필요한 정보를 Cart 필드에다가 넣어 준다.
        //dispatch(addToCart(props.detail._id))

    }

    return (
        <div>
            <Descriptions title="Template Info">
                <Descriptions.Item label="Style">{props.detail.style}</Descriptions.Item>
                <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger" onClick={clickHandler}>
                    찜하기
                </Button>
            </div>


        </div>
    )
}

export default ProductInfo