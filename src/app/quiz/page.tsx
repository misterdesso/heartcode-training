import { Input } from "@/components/input/input";

export default function Quiz() {
  return (
    <div className="p-3">
      <div>
        <p>
          Username
        </p>
      </div>
      <div className="py-1">
        <Input type="user" placeholder="John" />
      </div>
      <div>
        <p className="text-xs text-gray-400">
          This is your public display name
        </p>
      </div>

      <div className="py-3">
        <div>
          <p>
            What is the maximum penalty for drug abuse in Singapore?
          </p>
        </div>
        <div className="py-1">
          <Input type="user" placeholder="Answer" />
        </div>
      </div>

      <div className="py-3">
        <div>
          <p>
            Question 2
          </p>
        </div>
        <div className="py-1">
          <Input type="user" placeholder="Answer" />
        </div>
      </div>

      <div className="py-3">
        <div>
          <p>
            Question 3
          </p>
        </div>
        <div className="py-1">
          <Input type="user" placeholder="Answer" />
        </div>
      </div>
    </div>
  );
}