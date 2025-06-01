import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"

export default function Popup() {
    return (
        <div className="w-[300px] p-4 bg-while text-black">
            <Card>
                <CardContent>
                    <h1 className="text-lg font-bold mb-2">Mi extension moderna</h1>
                    <Button onClick={() => alert("Conectando a Supabase")}>Probar Supabase</Button>
                    Conectar
                </CardContent>
            </Card>
        </div>

    )
} 