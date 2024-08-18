import { Card, CardBody, Skeleton, Skeletoneton, SkeletonText } from '@chakra-ui/react'


const GameCardSkeleton = () => {
  return (
   
    <Card width='200px' height='300px' borderRadius={10} overflow='hidden' >
        <Skeleton height='200px'/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton