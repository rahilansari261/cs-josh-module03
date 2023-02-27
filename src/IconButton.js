import { Map, Save, ShoppingCart } from 'react-feather'
import styled from 'styled-components'

function IconButton({ icon, children, isCurrent, ...delegated }) {
  return (
    <IconButtonWrapper {...delegated}>
      <Icon isCurrent={isCurrent}>{icon}</Icon>
      {children}
    </IconButtonWrapper>
  )
}

const IconButtonWrapper = styled.button`
  background: white;
  border-radius: 8px;
  border: 2px solid hsl(0deg 0% 80%);
  width: 90px;
  height: 90px;
`
const Icon = styled.span`
  display: block;
  color: ${(p) => p.isCurrent && 'deeppink'};
`
export function ButtonGroup() {
  return (
    <Wrapper>
      <IconButton isCurrent icon={<Map />}>
        Navigation
      </IconButton>
      <IconButton icon={<Save />}>Save Route</IconButton>
      <IconButton icon={<ShoppingCart />}>View Cart</IconButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`
