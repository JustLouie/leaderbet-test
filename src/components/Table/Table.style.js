import styled from 'styled-components'
import { Table } from 'antd'

export const CustomTable = styled(Table)`
    table {
        thead {
            th {
                background-color: #2B2E3A;
                font-size: 15px;
                color: #B5B7BE;
                padding: 15px;
                border: none;
            }
        }

        tbody {
            td {
                background-color: #272936;
                border: none;
                color: white;
                pointer-events: none;

                img {
                    margin-right: 14px;
                }

                &.type {
                    position: relative;
                    img {
                        margin: 0px;
                    }

                    &::after {
                        content: '';
                        width: 3px;
                        height: 27px;
                        position: absolute;
                        top: 50%;
                        margin-left: 17px;
                        transform: translateY(-50%);
                        border-radius: 2px;
                        background-color: #383946;
                    }
                }
            }
            tr:nth-child(2n-1) {
                td {
                    background-color: #252630;
                }
            }
            
        }
    }
`

export const HistoryTable = styled(CustomTable)`

    .ant-table {
        background-color: transparent;
    }

    table {
        thead {
            th {
                background-color: transparent;
            }
        }
    
        tbody {
            td {
                background-color: #444563;
            }
            tr {
                border-radius: 5px;
                margin-bottom: 1px;
            }
    
            .players {
                display: flex;
            }
    
            tr:nth-child(2n-1) {
                td {
                    background-color: #444563;
                }
            }
        }
    }
    
`


export const TableTag = styled.p`
    color: #FFD919;
    padding: 5px 14px;
    font-size: 15px;
    border-radius: 15px;
    background-color: #5F39B7;
    display: inline;

    &.dark {
        background-color: #323341;
    }
` 