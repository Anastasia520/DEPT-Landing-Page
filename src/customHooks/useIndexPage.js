import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContent } from "redux/actions/content-action";

export default function useIndexPage() {
  const dispatch = useDispatch();
  const dataContent = useSelector((state) => state.content.content);
  const dataContentLoading = useSelector(
    (state) => state.content.loadingContent
  );
  const dataContentError = useSelector((state) => state.content.errorContent);

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  return {
    dataContent,
    dataContentLoading,
    dataContentError,
  };
}
