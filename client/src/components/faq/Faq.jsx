import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from "antd";

import style from './Faq.module.css';  //? Importamos los estilos del componente.

const Faq = () => {
    
    return (
        <div className={style.faqContainer}>
            <Timeline
                mode='alternate'
                items={[
                    {
                        children: 'Create a services site 2015-09-01'
                    },
                    {
                        children: 'Solve initial network problems 2015-09-01',
                        color: 'green'
                    },
                    {
                        dot: (
                            <ClockCircleOutlined
                                className={style.timelineItemDot}
                                style={{ fontSize: '20px' }}
                            />
                        ),
                        children: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.'
                    },
                    {
                        color: 'red',
                        children: 'Network problems being solved 2015-09-01'
                    },
                ]}
            />
        </div>
    )
};

export default Faq;