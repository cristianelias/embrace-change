/** @jsx jsx */
// Dependencies
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

// Components
import CoinDetailsContainer from "../Styled/CoinDetailsContainer";
import CoinDetailsImage from "../Styled/CoinDetailsImage";

const getSkeletonRow = (percentage) => {
  return styled.span`
    height: 28px;
    width: ${percentage};
    display: block;
    background-color: #f1f1f1;

    opacity: 0.7;
    animation: flashyLoading 0.8s linear infinite alternate;

    @keyframes flashyLoading {
      0% {
        background-color: hsl(200, 20%, 70%);
      }

      100% {
        background-color: hsl(200, 20%, 95%);
      }
    }
  `;
};

const TitleSkeleton = getSkeletonRow("40%");
const SymbolSkeleton = getSkeletonRow("25%");
const DescriptionSkeletonRow = getSkeletonRow("90%");
const ImageSkeleton = CoinDetailsImage.withComponent("div");

const CoinDetailsSkeleton = () => {
  return (
    <CoinDetailsContainer>
      <ImageSkeleton />
      <TitleSkeleton />
      <SymbolSkeleton
        css={css`
          margin-top: -15px;
        `}
      />

      {[...Array(10).keys()].map((key) => {
        return <DescriptionSkeletonRow key={key} />;
      })}
    </CoinDetailsContainer>
  );
};

export default CoinDetailsSkeleton;
