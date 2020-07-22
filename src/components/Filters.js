import React from 'react';
import { Stack, Select, MenuItem, Menu, MenuList, MenuButton, Button } from '@chakra-ui/core';
import { IoIosList, IoMdApps } from "react-icons/all";
import languages from '../data/language.json';

function Filters() {
    
    return (
        <Stack isInline spacing={2}>
            <Select>
                {
                    languages.map((language) => {
                        return (
                            <option key={language.value} value={language.value}>{ language.title }</option>
                        )
                    })
                }
            </Select>
            <Menu>
                <MenuButton bg="white" px="30px" borderWidth={1} as={Button} leftIcon="calendar">
                    Yearly
                </MenuButton>
                <MenuList>
                    <MenuItem>Monthly</MenuItem>
                    <MenuItem>Weekly</MenuItem>
                    <MenuItem>Daily</MenuItem>
                </MenuList>
            </Menu>
            <Stack isInline spacing={0} borderWidth={1} ml="10px" borderRadius="5px">
                <Button bg="white" leftIcon={ IoMdApps }> Grid</Button>
                <Button bg="white" leftIcon={ IoIosList }> List</Button>
            </Stack>
        </Stack>
    )
}

export default Filters
