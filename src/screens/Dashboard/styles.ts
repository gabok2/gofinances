import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color:${({ theme }) => theme.colors.background};

`;
export const UserWrapper = styled.View`
    width: 100%;
    padding:  0 24px;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    margin-top: ${RFValue(40)}px;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    
    background-color: ${({ theme }) => theme.colors.primary};

`;

export const Photo = styled.Image`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    border-radius: 10px;
`;


export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.shape};

    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};

    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};

`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;

`;

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }

})`
    position: absolute;
    width: 100%;
    margin-top: ${RFPercentage(20)}px;
`;