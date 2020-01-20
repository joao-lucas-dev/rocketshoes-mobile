import styled from 'styled-components/native';

export const Box = styled.View`
  width: 100%;
  height: 130px;
  margin: 10px 0;
`;

export const ViewTop = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Info = styled.View`
  width: 163px;
  height: 60px;
  margin-left: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  color: #333;
`;

export const Price = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  color: #000;
`;

export const ViewBottom = styled.View`
  flex-direction: row;
  background: #eee;
  border-radius: 5px;
  margin-top: 10px;
  width: 100%;
  height: 40px;
`;

export const ViewAmount = styled.View`
  width: 50%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  editable: false,
})`
  width: 51px;
  height: 26px;
  border: 1px solid #999;
  padding: 0px 10px;
  border-radius: 5px;
  background: #fff;
  margin: 0 10px;
`;

export const ViewSubtotal = styled.View`
  width: 50%;
  justify-content: center;
  align-items: flex-end;
`;

export const SubtotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;
