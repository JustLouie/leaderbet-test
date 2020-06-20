import styled from 'styled-components'
import { Modal } from 'antd'

export const CustomModal = styled(Modal)`
    min-width: 815px;
    padding: 0px;

    .ant-modal-content {
        background-color: transparent;
    }

    .ant-modal-header {
        background-color: transparent;
        border: none;
        .ant-modal-title {
            color: #ECEFFE;
            font-size: 17px;
        }
    }

    .ant-modal-body {
        padding: 0px;
    }


    &.history-modal {
        box-shadow: 0px 0px 40px #00000096;
        min-width: 964px
        .ant-modal-content {
            background-color: #35364a;
        }

        .ant-modal-body {
            padding: 10px;
        }
    }

`

