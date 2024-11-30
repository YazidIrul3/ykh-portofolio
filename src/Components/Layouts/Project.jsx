import EachUtils from "@/utils/EachUtils";
import CardProject from "../Fragments/CardProject";
import project from "@/helpers/projects";

const ProjectLayout = () => {
  return (
    <div className=" ">
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
        <EachUtils
          of={project.allProjects}
          render={(item) => <CardProject item={item} />}
        />
      </div>
    </div>
  );
};

export default ProjectLayout;
