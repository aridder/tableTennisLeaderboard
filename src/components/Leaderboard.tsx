import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type TableTennisPlayer } from "@prisma/client";
import { useRouter } from "next/navigation";

export default function Leaderboard({ data }: { data: TableTennisPlayer[] }) {
  const router = useRouter();

  data.sort(sortPlayers);
  return (
    <Table className="w-[min(500px,100%)]">
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Office</TableHead>
          <TableHead>Elo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((player, index) => (
          <TableRow
            key={player.id}
            onClick={() => router.push("/player/" + player.id)}
          >
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="font-medium">{player.name}</TableCell>
            <TableCell>{player.office}</TableCell>
            <TableCell>{player.elo}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const sortPlayers = (playerA: TableTennisPlayer, playerB: TableTennisPlayer) =>
  playerB.elo - playerA.elo;
