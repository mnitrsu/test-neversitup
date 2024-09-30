import DoneTask from "@/components/DoneTask";
import Header from "@/components/Header";
import { IconArrowLeft, IconMenu } from "@tabler/icons-react";
import { PropsWithChildren, useState } from "react";

const Main = ({ children }: PropsWithChildren) => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="relative overflow-hidden h-full">
      <div className="h-full">
        <Header
          title="TODO"
          icon={<IconMenu color="red" stroke={3} />}
          position="right"
          onClick={() => setOpenNav((prev) => !prev)}
        />
        <div className="py-2">{children}</div>
      </div>
      <DoneTask {...{ openNav, setOpenNav }} />
    </div>
  );
};

export default Main;
