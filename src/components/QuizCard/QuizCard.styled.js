import styled from 'styled-components';

const getBorderColor = ({theme, level}) => {
    switch (level) {
        case 'beginner':
            return theme.colors.green;
        case 'intermediate':
            return theme.colors.blue;
        case 'advanced':
            return theme.colors.orange;
        default:
            return null;        
    }    
};

export const Container = styled.div`
padding: ${p => p.theme.spacing(2)};
border: 3px solid ${getBorderColor};
border-radius: ${p => p.theme.radii.sm};

svg {
    color: red;
    display: block;
}
`;

export const InfoWrapper = styled.div`
display: flex;
gap: ${p => p.theme.spacing(2)};
padding: ${p => p.theme.spacing(1)};
`;

export const Info = styled.p`
margin: 0;
`;