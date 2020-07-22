import React from 'react';
import { Box, Image, Flex, Heading, Text } from "@chakra-ui/core";

function Brand() {
    return (
        <Flex alignItems="center">
            <Image width="68px" height="68px" src="/git_logo.png" alt="Logo"></Image>
            <Box ml="10px">
                <Heading fontSize="30px">Git Star</Heading>
                <Text color="gray.500">Most starred projects on Github</Text>
            </Box>
        </Flex>
    )
}

export default Brand
