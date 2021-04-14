import React, { useState } from 'react'
import { Collapse, Radio } from 'antd';

const { Panel } = Collapse;

function RadioBox(props) {

    const [Value, setValue] = useState(0)//처음에_id가0으로시작하니깐

    const renderRadioBox = () => (
        props.list && props.list.map(value => (
            <Radio key={value._id} value={value._id}> {value.name} </Radio>
        ))//value는 독립된 radio 값
    )
    const handleChange = (event) => {
        setValue(event.target.value) // 하나만선택됨
        props.handleFilters(event.target.value)
    }

    return (
        <div>
            <Collapse defaultActiveKey={['0']} >
                <Panel header="Price" key="1">

                    <Radio.Group onChange={handleChange} value={Value}>
                        {renderRadioBox()}
                    </Radio.Group>

                </Panel>
            </Collapse>
        </div>
    )
}

export default RadioBox