import { useIntl } from "react-intl";
import MuscleGroupsStyled from "./MuscleGroupsStyled";
import { formatMessage } from "../../../common/i18n/i18n";

const MuscleGroupsPage = (): React.ReactElement => {
  const intl = useIntl();

  return (
    <MuscleGroupsStyled>
      <h1>{formatMessage(intl, "muscleGroup.title")}</h1>
    </MuscleGroupsStyled>
  );
};

export default MuscleGroupsPage;
