import styled from 'styled-components';

export default styled.div`
    background-image: linear-gradient(
        -90deg,
        var(--shimmer-2) 0%,
        var(--shimmer-3) 50%,
        var(--shimmer-2) 100%
    );
    background-size: 400% 400%;
    animation: shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: -135% 0%;
        }
    }

    &.white {
        background-image: linear-gradient(
            -90deg,
            var(--shimmer-1) 0%,
            var(--shimmer-2) 50%,
            var(--shimmer-1) 100%
        );
    }
`;