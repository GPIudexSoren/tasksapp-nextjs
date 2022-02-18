import withAuth from '../components/withAuth';
import TasksProvider, { useTasks } from '../context/taskContext';
import Layout from '../components/Layout';
import TaskFormContainer from '../containers/TaskFormContainer';

const Home = () => {
  const tasks = useTasks()?.tasks;

  return (
    <TasksProvider>
      <Layout showNavbar={true}>
        <TaskFormContainer />
      </Layout>
    </TasksProvider>
  )
}

export default withAuth(Home);