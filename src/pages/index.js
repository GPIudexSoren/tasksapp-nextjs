import withAuth from '../components/withAuth';
import TasksProvider, { useTasks } from '../context/taskContext';
import Layout from '../components/Layout';
import TaskForm from '../components/TaskForm';

const Home = () => {
  const tasks = useTasks()?.tasks;

  return (
    <TasksProvider>
      <Layout showNavbar={true}>
        <TaskForm />
      </Layout>
    </TasksProvider>
  )
}

export default withAuth(Home);