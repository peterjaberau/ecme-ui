import { Box, SimpleGrid, Card } from '@chakra-ui/react'

const ComponentsCatalog = ({ items, columns = 4 }: any) => {
    return (
        <SimpleGrid columns={columns || 4}>
            {items.map((item: any, index: number) => (
                    <Card.Root>
                        {item.title && (
                            <Card.Header>
                                <Card.Title>{item.title}</Card.Title>
                            </Card.Header>
                        )}
                        <Card.Body>
                            <Box>
                                {item.component}
                            </Box>
                        </Card.Body>
                    </Card.Root>
            ))}
        </SimpleGrid>
    )
}

export default ComponentsCatalog
