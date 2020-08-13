'user moz'

import React from 'react';
import Brand from './Brand';
import { Button, ButtonGroup, Box, Flex } from '@chakra-ui/core';
import { FaGithub, FaTwitter, FaChrome } from 'react-icons/fa';

function PageHeader() {
    return (
        <Flex justifyContent="space-between" alignItems="center" mb="8">
            <Brand />
            <Box>
                <ButtonGroup spacing={2}>
                    <Button leftIcon={FaGithub} bg="teal.900" color="white">View Source</Button>
                    <Button leftIcon={FaChrome} variantColor="orange">Use Extension</Button>
                    <Button leftIcon={FaTwitter} variantColor="blue" variant="outline">Tweet</Button>
                </ButtonGroup>
            </Box>
        </Flex>
    )
}

export default PageHeader
