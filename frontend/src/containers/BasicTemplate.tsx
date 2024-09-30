import ModalCompleteTask from "@/components/ModalCompleteTask";
import Header from "@/components/Header";
import { IconMenu } from "@tabler/icons-react";
import { PropsWithChildren, useState } from "react";

const BasicTemplate = ({ children }: PropsWithChildren) => {
  const [openCompleteTask, setOpenCompleteTask] = useState<boolean>(false);

  return (
    <div className="relative overflow-hidden h-full">
      <div className="h-full overflow-y-scroll">
        <Header
          title="TODO"
          icon={<IconMenu color="red" stroke={3} />}
          position="right"
          onClick={() => setOpenCompleteTask((prev) => !prev)}
        />
        <div className="py-2">{children}</div>
      </div>
      {openCompleteTask && <ModalCompleteTask {...{ openCompleteTask, setOpenCompleteTask }} />}
    </div>
  );
};

export default BasicTemplate;
