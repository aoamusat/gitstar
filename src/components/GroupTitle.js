import React from 'react';
import { Text } from '@chakra-ui/core';

function GroupTitle() {
    return (
        <Text fontSize="22px" fontWeight="bold">
            This week <Text ml="7px" fontSize="15px" color="gray.500" fontWeight="normal" as="span">July 14, 2020 – July 21, 2020</Text>
        </Text>
    )
}

export default GroupTitle
